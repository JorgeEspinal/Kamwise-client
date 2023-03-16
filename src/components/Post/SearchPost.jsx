import {
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchPost = props => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchtext] = useState();

  const handleToAdd = () => {
    navigate('/post/?action=new');
  };

  const handleSearch = () => {
    const text = String(searchText).trim();
    // if (text.length > 0)
    //   dispatch(
    //     searchNoteBookData({
    //       type: searchType,
    //       value: text,
    //     })
    //   );
    // else dispatch(fetchNotebookData());
  };

  return (
    <HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaSearch />} />
        <Input
          type="search"
          placeholder={`Search by ${searchType}`}
          value={searchText}
          onChange={e => {
            setSearchtext(e.target.value);
          }}
        />
      </InputGroup>
      <RadioGroup value={searchType} onChange={setSearchType}>
        <Stack direction="row">
          <Radio value="title">Title</Radio>
          <Radio value="description">Description</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" type="button" onClick={handleSearch}>
        Search
      </Button>
      <Button
        colorScheme="blue"
        variant="outline"
        type="button"
        onClick={handleToAdd}
      >
        Add New
      </Button>
    </HStack>
  );
};

export default SearchPost;
