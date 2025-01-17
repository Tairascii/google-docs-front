'use client'

import Image from 'next/image'
import styles from './TemplateGallery.module.scss'

const templates = [
  {
    id: 0,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png',
    title: 'Blank document',
    subtitle: '',
  },
  {
    id: 1,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png',
    title: 'Resume',
    subtitle: 'Serif',
  },
  {
    id: 2,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/10bJALGfGJG8BrzBSmG6EznIq6-84l1TZkQ-HC8jO368_400.png',
    title: 'Resume',
    subtitle: 'Coral',
  },
  {
    id: 3,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/10e8_E36oj6_LuCRzckBFX_9oqbCHntmYB-jxB5U9gsw_400_2.png',
    title: 'Letter',
    subtitle: 'Spearmint',
  },
  {
    id: 4,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png',
    title: 'Project proposal',
    subtitle: 'Tropic',
  },
  {
    id: 5,
    image:
      'https://ssl.gstatic.com/docs/templates/thumbnails/1TojfPV3jurwEV2RpmVqnCCCR4z9g2eQBZ40XTHPBqk8_400_3.png',
    title: 'Brochure',
    subtitle: 'Geometric',
  },
]
const TemplateGallery = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h4 className={styles.title}>Start a new document</h4>
        </div>
        <div className={styles.templatesContainer}>
          {templates.map((item) => {
            return (
              <div className={styles.template} key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={133}
                  height={172}
                  className={styles.image}
                />
                <div className={styles.templateText}>
                  <span className={styles.templateTitle}>{item.title}</span>
                  <span className={styles.subtitle}>{item.subtitle}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TemplateGallery
