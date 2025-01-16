'use client'

import { useState } from 'react'
import styles from './HomeSearch.module.scss'
import clsx from 'clsx'
import { SearchIcon, XIcon } from 'lucide-react'
import { useSearchParam } from '@/hooks/useSearchParam'

const HomeSearch = () => {
  const [search, setSearch] = useSearchParam('search')
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState(search)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(value)
  }

  const onClear = () => {
    setValue('')
    setSearch('')
  }

  return (
    <div className={styles.container}>
      <form
        className={clsx(styles.form, { [styles.focusedForm]: focused })}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <button className={styles.iconButton}>
          <SearchIcon className={styles.icon} color="#444746" />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className={clsx(styles.input, { [styles.focuesInput]: focused })}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
          autoComplete="off"
        />
        {value && (
          <button className={styles.iconButton} type="button" onClick={onClear}>
            <XIcon className={styles.icon} color="#444746" />
          </button>
        )}
      </form>
    </div>
  )
}

export default HomeSearch
