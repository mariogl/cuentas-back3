class CustomError extends Error {
  constructor(public message: string, public code?: string) {
    super(message);
  }
}

export default CustomError;
