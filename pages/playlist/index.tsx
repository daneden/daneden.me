import BookList from "@/components/BookList"
import Layout from "@/components/Layout"
import RecentlyPlayed from "@/components/RecentlyPlayed"

export default function LibraryPage() {
  return (
    <Layout frontMatter={{ title: "Playlist" }}>
      <RecentlyPlayed />
      <BookList />
    </Layout>
  )
}
