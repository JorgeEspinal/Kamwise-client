import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostActionsForm = ({ post, action, onEdit, onCreate }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: post?.title,
      description: post?.description,
    },
  });

  const onSubmit = values => {
    if (action === 'edit') onEdit({ ...values, id: post._id });
    if (action === 'new') onCreate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <FormControl isInvalid={errors.title} required>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Title"
            {...register('title', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="description"
            {...register('description', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup variant="outline" spacing="4">
          <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
            {action === 'edit' ? 'Edit' : 'Create'}
          </Button>
          <Button onClick={() => navigate('/')}>Cancel</Button>
        </ButtonGroup>
      </VStack>
    </form>
  );
};

export default PostActionsForm;
