import React, { useCallback, useState, FormEvent } from 'react';

import { v4 as uuid } from 'uuid';

import { Form, ConfirmButton } from './styles';

import { useTask } from '~/context/task';

import Modal from '..';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalTask = ({ isOpen, setIsOpen }: IModalProps) => {
  const [title, setTitle] = useState('');
  const { addTask } = useTask();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const id = uuid();

      if (title === '') return;

      addTask({
        id,
        title,
        done: false,
        startedAt: null,
        isRunning: false,
        time: 0,
      });
      setTitle('');
      setIsOpen();
    },
    [setIsOpen, addTask, title],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informe o titulo da tarefa</legend>

          <input
            name="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />

          <ConfirmButton type="submit" variant="primary">
            Criar
          </ConfirmButton>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default ModalTask;
