import type { Request, Response } from 'express';
import { Note } from '../models/noteModel';

// GET all notes
export const getNotes = async (req: Request, res: Response): Promise<void> => {
  const notes = await Note.find();
  res.json(notes);
};

// POST create note
export const createNote = async (req: Request, res: Response): Promise<void> => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
};

// DELETE note
export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: 'Note deleted' });
};
