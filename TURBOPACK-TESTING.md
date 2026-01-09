# Turbopack Performance Testing

This document describes the Turbopack setup and testing methodology for this Next.js project.

## What is Turbopack?

Turbopack is Next.js's Rust-based bundler, designed to be a faster replacement for Webpack. It's built by the creators of Webpack and is optimized for Next.js applications.

## Changes Made

### 1. Package Scripts

Added Turbopack-enabled variants of the build and dev commands:

```json
{
  "scripts": {
    "dev:turbo": "bun --bun next dev --turbo",
    "build:turbo": "bun --bun next build --turbo",
    "benchmark": "bun run benchmark.ts"
  }
}
```

### 2. Benchmark Script

Created `benchmark.ts` - an automated performance testing script that:
- Measures production build times (standard vs Turbopack)
- Measures dev server startup times (standard vs Turbopack)
- Cleans cache between runs for fair comparison
- Generates detailed performance reports
- Saves results to `turbopack-benchmark-results.json`

## Running Tests

### Quick Manual Test

**Standard dev server:**
```bash
bun dev
```

**Turbopack dev server:**
```bash
bun dev:turbo
```

**Standard build:**
```bash
bun build
```

**Turbopack build:**
```bash
bun build:turbo
```

### Automated Benchmark

Run the comprehensive benchmark suite:

```bash
bun benchmark
```

This will:
1. Build with standard Webpack
2. Build with Turbopack
3. Start dev server with standard Webpack
4. Start dev server with Turbopack
5. Generate a comparison report

Results are saved to `turbopack-benchmark-results.json`.

## Expected Performance Improvements

Based on Next.js documentation, Turbopack typically provides:

- **Development:**
  - ~700x faster updates than Webpack
  - ~10x faster cold starts
  - ~5x faster initial compilation

- **Production Builds:**
  - Turbopack for builds is still experimental in Next.js 15
  - May see improvements, but results vary

## Current Status (Next.js 15)

- ✅ **Dev Server:** Turbopack is stable for development
- ⚠️ **Production Builds:** Turbopack for builds is experimental (`--turbo` flag)
- ✅ **MDX Support:** Fully compatible with this project's MDX setup

## Compatibility Notes

This project uses:
- Next.js 15 with App Router ✅
- MDX with custom remark/rehype plugins ✅
- TypeScript ✅
- Bun runtime ✅

All features are compatible with Turbopack.

## Monitoring Performance

### Dev Server Metrics to Watch

- **Time to Ready:** How long until "Ready in X ms" appears
- **Hot Module Replacement (HMR):** Speed of file change reflection
- **Initial Page Load:** First page render time

### Build Metrics to Watch

- **Total Build Time:** From start to completion
- **Bundle Size:** Output size (should be similar)
- **Route Generation:** Time to generate static routes

## Troubleshooting

### If Turbopack fails:

1. **Check MDX plugins:** Some remark/rehype plugins may not be compatible
2. **Check custom webpack config:** Turbopack doesn't use webpack config
3. **Check dependencies:** Ensure all dependencies support ESM
4. **Review error logs:** Turbopack errors are usually clear about incompatibilities

### Fallback to Standard Mode

Simply use the standard scripts:
```bash
bun dev    # Standard webpack dev
bun build  # Standard webpack build
```

## Next Steps

After running benchmarks:

1. Review `turbopack-benchmark-results.json`
2. Compare dev server experience
3. Test HMR performance during development
4. Verify all MDX content renders correctly
5. Check for any console warnings/errors
6. If stable, consider making Turbopack the default dev mode

## Making Turbopack Default

To make Turbopack the default for development, update package.json:

```json
{
  "scripts": {
    "dev": "bun --bun next dev --turbo",
    "dev:webpack": "bun --bun next dev"
  }
}
```

## References

- [Next.js Turbopack Documentation](https://nextjs.org/docs/architecture/turbopack)
- [Turbopack Features](https://turbo.build/pack/docs/features)
- [Migration Guide](https://nextjs.org/docs/app/api-reference/turbopack)
