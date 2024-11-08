export enum Color {
  Black,
  White,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  BlackKing = 'K',
  BlackQueen = 'Q',
  BlackRook = 'R',
  BlackBishop = 'B',
  BlackKnight = 'N',
  BlackPawn = 'P',
  WhiteKing = 'k',
  WhiteQueen = 'q',
  WhiteRook = 'r',
  WhiteBishop = 'b',
  WhiteKnight = 'n',
  WhitePawn = 'p',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.BlackKing]: 'assets/pieces/black-king.svg',
  [FENChar.BlackQueen]: 'assets/pieces/black-queen.svg',
  [FENChar.BlackRook]: 'assets/pieces/black-rook.svg',
  [FENChar.BlackBishop]: 'assets/pieces/black-bishop.svg',
  [FENChar.BlackKnight]: 'assets/pieces/black-knight.svg',
  [FENChar.BlackPawn]: 'assets/pieces/black-pawn.svg',
  [FENChar.WhiteKing]: 'assets/pieces/white-king.svg',
  [FENChar.WhiteQueen]: 'assets/pieces/white-queen.svg',
  [FENChar.WhiteRook]: 'assets/pieces/white-rook.svg',
  [FENChar.WhiteBishop]: 'assets/pieces/white-bishop.svg',
  [FENChar.WhiteKnight]: 'assets/pieces/white-knight.svg',
  [FENChar.WhitePawn]: 'assets/pieces/white-pawn.svg',
};

export type SafeSquares = Map<string, Coords[]>;
