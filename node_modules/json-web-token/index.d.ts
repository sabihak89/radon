//
// methods
//

export function encode(
  key: string,
  data: any,
  algorithm: string,
  cb: (err?: Error, token?: string) => any
): any;

export function decode(
  key: string,
  token: string,
  cb: (err?: Error, token?: string) => any
): any;

export function getAlgorithms(): string[];

export function JWTError(message: string): Error;
