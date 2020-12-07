Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ContainerLoading = void 0;

const _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  height: ',
    'px;\n  padding: 10px;\n  /* border: 1px solid ',
    '; */\n  background: ',
    ';\n  border-radius: 5px;\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

const ContainerLoading = _styledComponents.default.div(
  _templateObject(),
  function (props) {
    return props.height;
  },
  function (_ref) {
    const { colors } = _ref.theme;
    return colors.gray.gray_6;
  },
  function (_ref2) {
    const { colors } = _ref2.theme;
    return colors.white.default;
  },
);

exports.ContainerLoading = ContainerLoading;
