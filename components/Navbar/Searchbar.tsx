import { FormEvent, useEffect, useState } from "react"
import {
  Paper,
  IconButton,
  Autocomplete,
  InputBase,
  TextField
} from "@mui/material"
import { Route, Search } from "@mui/icons-material"
import {
  useDebounce,
  useAppDispatch,
  useAppSelector
} from "@/hooks/useDebounce"
import {
  getSearchQuery,
  setQuery
} from "@/redux/SearchNavbar/searchNavbarSlice"
import youtubeApi from "@/apis/youtube"
import { useRouter } from "next/router"

const Searchbar = () => {
  const dispatch = useAppDispatch()
  const query = useAppSelector(getSearchQuery)
  const route = useRouter()

  const [searchQuery, setSearchQuery] = useState(query)
  const debouncedSearchQuery = useDebounce<string>(searchQuery, 500)

  const [autoComplete, setAutoComplete] = useState<string[]>([])

  useEffect(() => {
    dispatch(setQuery(debouncedSearchQuery))
    getAutocomplete(debouncedSearchQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery])

  const getAutocomplete = (query: string) => {
    youtubeApi
      .get("/auto-complete/", {
        params: {
          q: query
        }
      })
      .then(response => {
        console.log(response.data.results)
        setAutoComplete(response.data.results)
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchQuery) {
      route.push(`/results/${searchQuery}`)
      setSearchQuery("")
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={e => handleSubmit(e)}
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#0f0f0f",
        color: "whitesmoke",
        borderRadius: 20,
        border: "1px solid #333",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        width: "30%"
      }}
    >
      <Autocomplete
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center"
        }}
        freeSolo
        options={autoComplete}
        value={query}
        renderInput={params => (
          <TextField
            {...params}
            sx={{ input: { color: "whitesmoke" }, color: "whitesmoke" }}
            variant="standard"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
          />
        )}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "whitesmoke"
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default Searchbar
