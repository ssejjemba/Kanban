export interface NodeData {
  id: string; // A unique identifier for the node
  title: string; // The title of the item represented by the node
  description: string; // A brief description of the item
  status: "To Do" | "In Progress" | "Done"; // The current status of the item
  createdAt: Date; // The date the item was created
  updatedAt: Date; // The date the item was last updated
  dueDate: Date; // The date the item is due
  labels: string[]; // An array of labels associated with the item
  attachments: string[]; // An array of attachments associated with the item
  assignedTo: string; // The name of the person assigned to the item
  column: string; // The name of the column the item is in
  positionInColumn: number; // The position of the item within the column
  parentId: string | null; // The id of the parent item (will be the board that the card belongs to)
  childIds: string[]; // An array of ids of child items (will not be used in this application)
  tags: string[]; // An array of tags associated with the item
  comments: Comment[]; // An array of comments associated with the item
  priority: "Low" | "Medium" | "High"; // The priority of the item
  estimatedTime: number; // The estimated time required to complete the item
  actualTime: number; // The actual time taken to complete the item
  isArchived: boolean; // Indicates whether the item is archived or not
}

export interface Board {
  id: string; // A unique identifier for the board
  name: string; // The name of the board
  description: string; // A brief description of the board
  columns: Column[]; // An array of columns that make up the board
  createdAt: Date; // The date the board was created
  updatedAt: Date; // The date the board was last updated
}

export interface Column {
  id: string; // A unique identifier for the column
  name: string; // The name of the column
  cardIds: string[]; // An array of ids of cards that belong to the column
}
