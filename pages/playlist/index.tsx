import BookList from "@/components/BookList"
import Layout from "@/components/Layout"

export default function LibraryPage() {
  return (
    <Layout frontMatter={{ title: "Playlist" }}>
      <BookList />
    </Layout>
  )
}
