// Mock indexedDB
const indexedDB = {
  // eslint-disable-next-line no-undef
  open: jest.fn(),
};

// Export the mock
module.exports = indexedDB;
