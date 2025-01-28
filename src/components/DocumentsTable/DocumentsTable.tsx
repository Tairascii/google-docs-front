'use client'

import { getDocuments } from '@/api/documents'
import { GoogleDocument } from '@/api/types'
import { useEffect, useState } from 'react'

interface DocumentsTableProps {}

const DocumentsTable = ({}: DocumentsTableProps) => {
  const [data, setData] = useState<GoogleDocument[]>([])

  useEffect(() => {
    const getData = async () => {
      const resp = await getDocuments()
      console.log(resp)
      setData(resp)
    }

    getData()
  }, [])

  return (
    <div>
      {data.map((doc) => {
        return <div>{doc.title}</div>
      })}
    </div>
  )
}

export default DocumentsTable
