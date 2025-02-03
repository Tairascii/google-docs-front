'use client'

import { deleteDocument, getDocuments } from '@/api/documents'
import { GoogleDocument } from '@/api/types'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './DocumentsTable.module.scss'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'
import { MoreDropdown } from '@/ui/MoreDropdown'
import { EditIcon, ExternalLinkIcon, TrashIcon } from 'lucide-react'
import { useSearchParam } from '@/hooks/useSearchParam'

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
  const [search] = useSearchParam('search')
  const [data, setData] = useState<GoogleDocument[]>([])
  const getData = async () => {
    const resp = await getDocuments(search)
    setData(resp)
  }

  useEffect(() => {
    getData()
  }, [search])

  const onDeleteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    documentId: string
  ) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await deleteDocument(documentId)
      getData()
    } catch (err) {
      console.log(err)
    }
  }

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
                {/* TODO add date formating */}
                <span className={styles.createdAt}>Jan 30, 2025</span>
                {/* TODO add modal for confirming deletion when not lazy */}
                <MoreDropdown
                  rows={[
                    <button
                      className={styles.dropdownRow}
                      onClick={(e) => onDeleteClick(e, doc.id)}
                    >
                      <EditIcon
                        className={styles.dropdownIcon}
                        color="#5f6367"
                      />
                      <span className={styles.dropdownRowTitle}>Rename</span>
                    </button>,
                    <button
                      className={styles.dropdownRow}
                      onClick={(e) => onDeleteClick(e, doc.id)}
                    >
                      <TrashIcon
                        className={styles.dropdownIcon}
                        color="#5f6367"
                      />
                      <span className={styles.dropdownRowTitle}>Remove</span>
                    </button>,
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
