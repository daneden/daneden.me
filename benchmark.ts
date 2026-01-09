#!/usr/bin/env bun
/**
 * Turbopack Performance Benchmark Script
 *
 * This script compares build and dev server performance
 * between standard Webpack and Turbopack modes.
 */

import { spawn } from "child_process"
import { writeFileSync } from "fs"

interface BenchmarkResult {
  mode: "standard" | "turbopack"
  type: "build" | "dev"
  duration: number
  timestamp: string
  success: boolean
  output?: string
}

const results: BenchmarkResult[] = []

function measureCommand(
  command: string,
  args: string[],
  mode: "standard" | "turbopack",
  type: "build" | "dev"
): Promise<BenchmarkResult> {
  return new Promise((resolve) => {
    const startTime = Date.now()
    console.log(`\n🚀 Running ${mode} ${type}...`)
    console.log(`Command: ${command} ${args.join(" ")}\n`)

    const proc = spawn(command, args, {
      stdio: "pipe",
      shell: true,
    })

    let output = ""

    proc.stdout?.on("data", (data) => {
      const str = data.toString()
      output += str
      process.stdout.write(str)
    })

    proc.stderr?.on("data", (data) => {
      const str = data.toString()
      output += str
      process.stderr.write(str)
    })

    // For dev server, kill after it's ready
    if (type === "dev") {
      proc.stdout?.on("data", (data) => {
        const str = data.toString()
        if (str.includes("Ready in") || str.includes("compiled") || str.includes("started server")) {
          setTimeout(() => {
            proc.kill()
          }, 1000)
        }
      })
    }

    proc.on("close", (code) => {
      const duration = Date.now() - startTime
      const result: BenchmarkResult = {
        mode,
        type,
        duration,
        timestamp: new Date().toISOString(),
        success: code === 0 || (type === "dev" && code === null),
        output: output.substring(0, 1000), // Keep first 1000 chars
      }

      console.log(
        `\n✅ ${mode} ${type} completed in ${(duration / 1000).toFixed(2)}s\n`
      )

      results.push(result)
      resolve(result)
    })

    proc.on("error", (error) => {
      const duration = Date.now() - startTime
      const result: BenchmarkResult = {
        mode,
        type,
        duration,
        timestamp: new Date().toISOString(),
        success: false,
        output: error.message,
      }

      console.error(`\n❌ ${mode} ${type} failed: ${error.message}\n`)

      results.push(result)
      resolve(result)
    })
  })
}

async function runBenchmarks() {
  console.log("=" .repeat(60))
  console.log("🎯 Turbopack vs Webpack Performance Benchmark")
  console.log("=" .repeat(60))

  // Clean build cache
  console.log("\n🧹 Cleaning .next cache...")
  await measureCommand("rm", ["-rf", ".next"], "standard", "build")

  // Test 1: Standard build
  await measureCommand("bun", ["--bun", "next", "build"], "standard", "build")

  // Clean build cache
  console.log("\n🧹 Cleaning .next cache...")
  await measureCommand("rm", ["-rf", ".next"], "turbopack", "build")

  // Test 2: Turbopack build
  await measureCommand(
    "bun",
    ["--bun", "next", "build", "--turbo"],
    "turbopack",
    "build"
  )

  // Clean dev cache
  console.log("\n🧹 Cleaning .next cache...")
  await measureCommand("rm", ["-rf", ".next"], "standard", "dev")

  // Test 3: Standard dev server startup
  await measureCommand("bun", ["--bun", "next", "dev"], "standard", "dev")

  // Clean dev cache
  console.log("\n🧹 Cleaning .next cache...")
  await measureCommand("rm", ["-rf", ".next"], "turbopack", "dev")

  // Test 4: Turbopack dev server startup
  await measureCommand(
    "bun",
    ["--bun", "next", "dev", "--turbo"],
    "turbopack",
    "dev"
  )

  // Generate report
  console.log("\n" + "=".repeat(60))
  console.log("📊 Benchmark Results")
  console.log("=".repeat(60))

  const buildResults = results.filter((r) => r.type === "build" && r.success)
  const devResults = results.filter((r) => r.type === "dev" && r.success)

  if (buildResults.length === 2) {
    const [standard, turbo] = buildResults
    const improvement = ((standard.duration - turbo.duration) / standard.duration) * 100

    console.log("\n🏗️  Production Build:")
    console.log(`   Standard: ${(standard.duration / 1000).toFixed(2)}s`)
    console.log(`   Turbopack: ${(turbo.duration / 1000).toFixed(2)}s`)
    console.log(`   Improvement: ${improvement > 0 ? '↑' : '↓'} ${Math.abs(improvement).toFixed(1)}%`)
  }

  if (devResults.length === 2) {
    const [standard, turbo] = devResults
    const improvement = ((standard.duration - turbo.duration) / standard.duration) * 100

    console.log("\n⚡ Dev Server Startup:")
    console.log(`   Standard: ${(standard.duration / 1000).toFixed(2)}s`)
    console.log(`   Turbopack: ${(turbo.duration / 1000).toFixed(2)}s`)
    console.log(`   Improvement: ${improvement > 0 ? '↑' : '↓'} ${Math.abs(improvement).toFixed(1)}%`)
  }

  // Save detailed results
  const reportPath = "turbopack-benchmark-results.json"
  writeFileSync(reportPath, JSON.stringify(results, null, 2))
  console.log(`\n📝 Detailed results saved to ${reportPath}`)
  console.log("=".repeat(60) + "\n")
}

runBenchmarks().catch(console.error)
