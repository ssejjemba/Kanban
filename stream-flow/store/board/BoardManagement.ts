import { Board } from "../../models/data";

export class BoardManager {
  private boards: Board[] = []; // an array to store the boards

  // Method to add a new board
  addBoard(board: Board) {
    this.boards.push(board);
  }

  // Method to remove a board by id
  removeBoard(id: string) {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  // Method to update a board by id
  updateBoard(id: string, updatedBoard: Board) {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index === -1) {
      throw new Error(`Board with id ${id} not found`);
    }
    this.boards[index] = { ...this.boards[index], ...updatedBoard };
  }

  // Method to rename a column for a specific board
  renameColumn(boardId: string, columnId: string, newName: string) {
    const board = this.getBoard(boardId);
    if (!board) {
      throw new Error(`Board with id ${boardId} not found`);
    }
    const columnIndex = board.columns.findIndex((col) => col.id === columnId);
    if (columnIndex === -1) {
      throw new Error(
        `Column with id ${columnId} not found in board ${boardId}`
      );
    }
    board.columns[columnIndex].name = newName;
  }

  // Method to get a board by id
  getBoard(id: string): Board | undefined {
    return this.boards.find((board) => board.id === id);
  }

  // Method to get all boards
  getBoards(): Board[] {
    return this.boards;
  }
}
