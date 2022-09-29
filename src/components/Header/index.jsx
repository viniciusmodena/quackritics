import { useHistory } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";
import { FiSearch } from "react-icons/fi";
import { useTitles } from "../../Providers/titles";
import { useReviews } from "../../Providers/reviews";
import { useUser } from "../../Providers/user";
import {
  ButtonContainer,
  Container,
  RightContainer,
  SearchContainer,
} from "./style";
import { useEffect } from "react";

const Header = () => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem('@quackritics:token'))
  const { titleSearch, setSearchInput, searchInput } = useTitles();
  const { setLoad } = useReviews();

  const { userLogged, setUserLogged } = useUser()

  const Navigate = (path) => {
    return path === 'login'
      ? history.push('/login')
      : path === 'forum'
      ? history.push('/forum')
      : history.push('/user')
  }

  const handleClick = (e) => {
    e.preventDefault()
    setLoad(false);
    titleSearch(searchInput);
    history.push("/search");
  };

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      handleClick(e)
    }
  }

  useEffect(() => {
    if (!!token) setUserLogged(true)
  },[])

  return (
    <Container>
      <Logo />
      <RightContainer>
        <ButtonContainer>
          <Button
            colorSchema={'--primary-gradient'}
            onClick={() => Navigate('forum')}
          >
            Forum
          </Button>
          {userLogged ? (
            <Button
              colorSchema={'--primary-gradient'}
              onClick={() => Navigate('user')}
            >
              Profile
            </Button>
          ) : (
            <Button
              colorSchema={'--primary-gradient'}
              onClick={() => Navigate('login')}
            >
              Login
            </Button>
          )}
        </ButtonContainer>
        <SearchContainer>
          <img src='./duck.svg' alt='pato' />
          <input
            type='text'
            placeholder='Search here...'
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button colorSchema={'--primary-gradient'} onClick={handleClick}>
            <FiSearch />
          </Button>
        </SearchContainer>
      </RightContainer>
    </Container>
  )
};
export default Header;
