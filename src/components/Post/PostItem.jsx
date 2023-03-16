import { HStack, IconButton, Td, Tr } from '@chakra-ui/react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ id, title, description, date, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToEdit = () => {
    navigate(`/post?action=edit&id=${id}`);
  };

  return (
    <>
      <Tr>
        <Td>{date}</Td>
        <Td>{title.length > 20 ? title.substring(0, 20) + '...' : title}</Td>
        <Td>
          {description.length > 30
            ? description.substring(0, 30) + '...'
            : description}
        </Td>
        <Td alignSelf="stretch">
          <HStack>
            <IconButton
              //   colorScheme="blue"
              icon={<FaPen />}
              isRound
              onClick={handleToEdit}
            />
            <IconButton
              //   colorScheme="blue"
              icon={<FaTrash />}
              isRound
              onClick={handleDelete}
            />
          </HStack>
        </Td>
      </Tr>
    </>
  );
};

export default PostItem;
