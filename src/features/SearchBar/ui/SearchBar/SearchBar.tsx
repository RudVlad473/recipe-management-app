import { Input } from "antd"
import { FC } from "react"

const { Search } = Input

type SearchBarProps = {
  onSearch?: (value: string) => void
  onChange?: (value: string) => void
  isLoading?: boolean
  allowClear?: boolean
}

export const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  isLoading = false,
  onChange,
  allowClear = false,
}) => {
  return (
    <Search
      placeholder="input item name"
      enterButton="Search"
      size="large"
      allowClear={allowClear}
      loading={isLoading}
      onSearch={onSearch}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  )
}
