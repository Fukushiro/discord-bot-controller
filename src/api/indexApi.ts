export interface DefaultReturn {
  worked: boolean;
  data: any;
  response: any;
  message: string;
}

export function success(data: {
  response: any;
  message?: string;
}): DefaultReturn {
  return {
    response: data.response,
    data: data.response.data,
    worked: true,
    message: data.message ? data.message : "",
  };
}

export function error(data: {
  response?: any;
  message?: string;
}): DefaultReturn {
  return {
    response: data.response,
    data: data.response ? data.response : null,
    worked: false,
    message: data.message ? data.message : "",
  };
}
