import React, { useCallback, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import Summary from './Summary';

import Modal from '~/components/Modal/ModalTask';

import { Container, Wrapper, TaskButton } from './styles';

const SideBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleAddTask = useCallback(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    <>
      <Container>
        <Wrapper>
          <TaskButton variant="primary" onClick={handleAddTask}>
            <FiPlus size={18} />
            Nova tarefa
          </TaskButton>

          <Summary />
        </Wrapper>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
    </>
  );
};

export default SideBar;
