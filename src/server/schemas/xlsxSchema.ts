const xlsxSchema = {
  "DATA VALOR": {
    prop: "date",
    type: String,
    required: true,
  },
  CONCEPTE: {
    prop: "description",
    type: String,
    required: true,
  },
  IMPORT: {
    prop: "quantity",
    type: Number,
    required: true,
  },
  SALDO: {
    prop: "balance",
    type: Number,
    required: true,
  },
};

export default xlsxSchema;
