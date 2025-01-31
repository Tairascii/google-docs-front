'use client'

import { getDocuments } from '@/api/documents'
import { GoogleDocument } from '@/api/types'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './DocumentsTable.module.scss'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'
import { MoreDropdown } from '@/ui/MoreDropdown'
import { ExternalLinkIcon } from 'lucide-react'

interface DocumentsTableProps {}

const mock: GoogleDocument[] = [
  {
    id: '1',
    title: 'Some',
    ownerId: '1',
    initialContent: '',
    roomId: '',
    orgId: '',
  },
]
const DocumentsTable = ({}: DocumentsTableProps) => {
  const [data, setData] = useState<GoogleDocument[]>(mock)

  // useEffect(() => {
  //   const getData = async () => {
  //     const resp = await getDocuments()
  //     setData(resp)
  //   }

  //   getData()
  // }, [])

  const onOpenInNew = (documentId: string) => {
    window.open(`${UrlEnum.DOCUMENTS}/${documentId}`, '_blank')
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <span className={styles.recentLabel}>Recent documents</span>
        </div>
        <div className={styles.main}>
          {data.map((doc) => {
            return (
              <Link
                href={`${UrlEnum.DOCUMENTS}/${doc.id}`}
                key={doc.id}
                className={styles.docRow}
              >
                <Image
                  alt="file"
                  src="https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <div className={styles.titleWrapper}>
                  <span className={styles.title}>{doc.title}</span>
                </div>
                <span className={styles.createdAt}>Jan 30, 2025</span>
                <MoreDropdown
                  rows={[
                    <button
                      className={styles.dropdownRow}
                      onClick={() => onOpenInNew(doc.id)}
                    >
                      <ExternalLinkIcon
                        className={styles.dropdownIcon}
                        color="#5f6367"
                      />
                      <span className={styles.dropdownRowTitle}>
                        Open in new tab
                      </span>
                    </button>,
                  ]}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DocumentsTable
