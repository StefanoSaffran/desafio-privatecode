import React, { useCallback, useState, FormEvent, useRef } from 'react';

import { Form, ConfirmButton } from './styles';

import { useTask, ITask } from '~/context/task';

import Modal from '..';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  task: ITask;
}

const ModalEditTask = ({ isOpen, setIsOpen, task }: IModalProps) => {
  const { editTask } = useTask();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (inputRef?.current?.value === '') return;

      const { id, isRunning, startedAt, done, time } = task;

      editTask({
        id,
        title: inputRef?.current?.value || '',
        done,
        startedAt,
        isRunning,
        time,
      });

      setIsOpen();
    },
    [setIsOpen, editTask, task],
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
