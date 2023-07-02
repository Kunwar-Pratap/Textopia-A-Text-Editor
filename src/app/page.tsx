import Layout from '@/components/Layout'
import TextEditor from '@/components/TextEditor'

export default function Home() {
  return (
    <Layout mainHeading='Enter the text below for editing'>
      <TextEditor/>
    </Layout>
  )
}
