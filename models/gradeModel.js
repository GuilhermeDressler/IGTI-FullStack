export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      requerid: true,
    },
    subject: {
      type: String,
      requerid: true,
    },
    type: {
      type: String,
      requerid: true,
    },
    value: {
      type: Number,
      requerid: true,
    },
    lastModified: {
      type: Date,
      requerid: true,
    },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const gradeModel = mongoose.model('grades', schema, 'grades');

  return gradeModel;
};
