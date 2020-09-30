import moment = require('moment');
import { basename } from 'path';

import { getRandomAuthor } from '../constants';

import { HeaderInfo, headerTemplate } from './constants';

const parseDate = (date: moment.Moment): string => {
  return date.format('YYYY/MM/DD HH:mm:ss');
};

const setUpHeaderConfig = (filepath: string): HeaderInfo => {
  const user: string = process.env.USER || 'marvin';
  const author: string = getRandomAuthor();

  const content: HeaderInfo = {
    filename: basename(filepath),
    user: author,
    mail: `<${author}@student.42.fr>`,
    createdDate: parseDate(moment()),
    updatedDate: parseDate(moment()),
    createdBy: user,
    updatedBy: user,
  };

  return content;
};

const setFieldValue = (header: string, field: string, value: string) => {
  const whitespacesCount: number = field.length - value.length;
  return header.replace(field, value + ' '.repeat(whitespacesCount));
};

export const generateHeader = (filepath: string): string => {
  const config = setUpHeaderConfig(filepath);

  let newHeader: string = headerTemplate;
  newHeader = setFieldValue(newHeader, '$FILENAME__________________________________', config.filename);
  newHeader = setFieldValue(newHeader, '$AUTHOR________________________________', `${config.user} ${config.mail}`);
  newHeader = setFieldValue(newHeader, '$CREATEDATE________', config.createdDate);
  newHeader = setFieldValue(newHeader, '$CREATEDBY_', config.createdBy);
  newHeader = setFieldValue(newHeader, '$UPDATEDATE________', config.updatedDate);
  newHeader = setFieldValue(newHeader, '$UPDATEDBY_', config.updatedBy);
  return newHeader;
};
