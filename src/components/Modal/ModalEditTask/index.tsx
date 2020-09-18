import React, { useCallback, FormEvent, useRef } from 'react';

import { Form, ConfirmButton } from './styles';

import { useTask, ITask } from '~/context/task';

import Modal from '..';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  task: ITask;
}

const ModalEditTask = ({ isOpen, setIsOpen, task }: IModalProps) => {
  const { updateTask } = useTask();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (inputRef?.current?.value === '') return;

      const { id, isRunning, backgroundStartedAt, done, time } = task;

      updateTask({
        id,
        title: inputRef?.current?.value || '',
        done,
        backgroundStartedAt,
        isRunning,
        time,
      });

      setIsOpen();
    },
    [setIsOpen, updateTask, task],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Atualize o titulo da tarefa</legend>

          <input defaultValue={task.title} name="title" ref={inputRef} />

          <ConfirmButton type="submit" variant="primary">
            Atualizar
          </ConfirmButton>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default ModalEditTask;
