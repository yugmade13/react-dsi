import { useEffect, useState } from 'react';
import Table from './components/Table.tsx';
import ToggleTheme from './components/ToggleTheme.tsx';
import { asyncFetchUsers } from './features/users/usersSlice.ts';
import { useAppDispatch, useAppSelector } from './app/hook.ts';
import ThemeContextProvider from './context/ThemeContext.tsx';
import Container from './components/Container.tsx';
import Loading from './components/Loading.tsx';
import Search from './components/Search.tsx';
import { useSearchParams } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const { entities, loading, error }: InitialStateProps = useAppSelector((state) => state.users);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('search') || ''
  });

  useEffect(() => {
    dispatch(asyncFetchUsers());
  }, [dispatch]);

  const onKeywordChange = (value: string) => {
    setKeyword(value);
    setSearchParams({ 'search': value });
  }

  if (loading === 'pending') {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        {error}
      </Container>
    );
  }

  const filteredUser = entities.filter((user) => {
    return user.name.toLowerCase().includes(keyword.toLowerCase())
  })

  return (
    <ThemeContextProvider>
      <Container>
        <div className="w-full flex justify-end gap-2 text-end">
          <Search keyword={keyword} onKeywordChange={onKeywordChange}/>
          <ToggleTheme />
        </div>
        <Table users={filteredUser} />
      </Container>
    </ThemeContextProvider>
  )
}

export default App
