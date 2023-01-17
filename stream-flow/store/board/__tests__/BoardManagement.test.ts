import { BoardManager } from "../BoardManagement";

describe("BoardManager", () => {
  let boardManager: BoardManager;

  beforeEach(() => {
    boardManager = new BoardManager();
  });

  test("creates a new board with the provided name", () => {
    const newBoard = boardManager.createBoard("My new board");
    expect(newBoard).toEqual({
      id: expect.any(String),
      name: "My new board",
      columns: [],
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  test("creates a new board with provided options", () => {
    const newBoard = boardManager.createBoard("My new board", {
      columns: [{ id: "1", name: "To Do", cardIds: [] }],
    });
    expect(newBoard).toEqual({
      id: expect.any(String),
      name: "My new board",
      columns: [{ id: "1", name: "To Do", cardsIds: [] }],
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  test("should add a board", () => {
    const board = boardManager.createBoard("Test Board");
    boardManager.addBoard(board);
    expect(boardManager.getBoards()).toContain(board);
  });

  test("should remove a board", () => {
    const board = boardManager.createBoard("Test Board");
    boardManager.addBoard(board);
    boardManager.removeBoard("1");
    expect(boardManager.getBoards()).not.toContain(board);
  });

  test("should update a board", () => {
    const board = boardManager.createBoard("Test Board", { id: "1" });
    boardManager.addBoard(board);
    const updatedBoard = boardManager.createBoard("Updated Board", { id: "1" });
    boardManager.updateBoard("1", updatedBoard);
    expect(boardManager.getBoard("1")).toEqual({ ...board, ...updatedBoard });
  });

  test("should throw an error if board is not found when updating", () => {
    expect(() =>
      boardManager.updateBoard("1", boardManager.createBoard("Updated Board"))
    ).toThrowError("Board with id 1 not found");
  });
});
