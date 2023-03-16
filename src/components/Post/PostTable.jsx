import {
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  IconButton,
  TableCaption,
} from '@chakra-ui/react';

import Filter from '../UI/SortButton';
import { FaSyncAlt } from 'react-icons/fa';

import SkeletonTable from '../UI/SkeletonTable';
import PostItem from './PostItem';
import config from '../../config';

const PostTable = ({ posts }) => {
  const sortByDate = () => {};

  const sortByTitle = () => {};

  const sortByDescription = () => {};

  const updateTable = () => {};

  const handleDelete = id => {
    fetch(`${config.URL_API}${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: null,
    })
      .then(res => {
        console.log('Deleted');
      })
      .catch(err => console.error(err));
  };

  const postsItems = posts.map(post => (
    <PostItem
      key={post._id}
      id={post._id}
      date={new Intl.DateTimeFormat('en-US').format(new Date())}
      title={post.title}
      description={post.description}
      onDelete={handleDelete}
    />
  ));

  return (
    <>
      <TableContainer>
        <Table variant="striped" size={'md'}>
          {posts.length === 0 && <TableCaption>No data</TableCaption>}
          <Thead>
            <Tr>
              <Th>
                Date{' '}
                <Filter handleClick={sortByDate} ariaLabel="Sort by date" />
              </Th>
              <Th>
                Title{' '}
                <Filter handleClick={sortByTitle} ariaLabel="Sort by title" />
              </Th>
              <Th>
                Description{' '}
                <Filter
                  handleClick={sortByDescription}
                  ariaLabel="Sort by description"
                />
              </Th>
              <Th>
                Actions{' '}
                <IconButton
                  icon={<FaSyncAlt />}
                  aria-label="Update table"
                  size="xs"
                  onClick={updateTable}
                />
              </Th>
            </Tr>
          </Thead>
          {/* <Tbody>{!isLoading && notebooks}</Tbody> */}
          <Tbody>{postsItems}</Tbody>
          <Tfoot></Tfoot>
        </Table>
        {/* {isLoading && <SkeletonTable />} */}
      </TableContainer>
    </>
  );
};

export default PostTable;
