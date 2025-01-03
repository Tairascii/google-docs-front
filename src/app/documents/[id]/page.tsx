interface DocumentDetailProps {
  params: Promise<{ id: string }>
}

const DocumentDetail = async ({ params }: DocumentDetailProps) => {
  const { id } = await params
  return <div>hello {id}</div>
}

export default DocumentDetail
