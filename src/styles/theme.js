const theme = {
  colors: {
    white: {
      white_1: '#fff',
    },
    blue: {
      blue_1: '#00AEEF',
      blue_2: '#d0e9ff',
      blue_3: '#dce2ff',
      blue_4: '#a3aafc',
      blue_5: '#F5F7FA',
      blue_6: '#10adee',
      blue_7_border: '0 3px 10px 0 rgba(0,139,255,.3)',
      blue_8: '#ecf9ff',
    },
    green: {
      green_1: '#52c41a',
    },
    gray: {
      gray_1: '#8181A5', // color text main
      gray_2: '0 10px 20px 0 rgba(119, 135, 147, 0.1)',
      gray_3: '#cac9c9',
      gray_4: '#919090',
      gray_5: '#d9d9d9',
      gray_6: '#b2b2b2',
      gray_7: '#FBFBFD',
      gray_8: '#efefef',
      gray_9: '#e9e9f1',
      gray_10: '#f5f5fa',
      //   gray_11: '#8181A5',
    },
    red: {
      red_1: '#cc5e77',
    },
    black: {
      black_1: '#24292e',
      black_2: '#312d37',
    },
    transparent: 'transparent',
    positive: {
      default: '#6CC575',
      border: '#a1ffa1',
    },
    neutral: {
      default: '#B7C1E1',
      border: '#B7C1E1',
    },
    negative: {
      default: '#CC5E77',
      border: '#ffd1d1',
    },
    status: {
      pending: {
        color: '#3c3737',
        background: '#f1f1f1',
      },
      completed: {
        color: '#66B92E',
        background: '#E5FAEE',
      },
      inProcess: {
        color: '#979797',
        background: '#f5f5fa',
      },
      error: {
        color: '#CC5E77',
        background: '#f5dfe4',
      },
      train: {
        color: '#E3A63A',
        background: '#FFF2DE',
      },
      processBar: {
        backgroundIn: '#ECF9FF',
        color: '#00AEEF',
        border: '#00AEEF',
      },
    },
  },
  values: {
    fonts: {
      primary: 'Lato,Helvetica, Arial, sans-serif',
    },
    fontSize: '17px',
    letterSpacing: '0.45px',
    maxPageWidth: '1400px',
  },
};

export default theme;
