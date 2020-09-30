import * as fs from 'fs';
import moment = require('moment');
import { basename } from 'path';


export interface HeaderInfo {
  filename: string;
  user: string;
  mail: string;
  createdDate: moment.Moment;
  updatedDate: moment.Moment;
  createdBy: string;
  updatedBy: string;
}

const headerTemplate = `
* ************************************************************************** *
*                                                                            *
*                                                        :::      ::::::::   *
*   FILENAME____________________________               :+:      :+:    :+:   *
*                                                    +:+ +:+         +:+     *
*   By: USER____________________________           +#+  +:+       +#+        *
*                                                +#+#+#+#+#+   +#+           *
*   Created: CREATED_DATE___    by CREATED_BY_              #+#    #+#       *
*   Updated: UPDATED_DATE___    by UPDATED_BY_           ###   ########.fr   *
*                                                                            *
* ************************************************************************** *
`.substring(1);

console.log(headerTemplate);

export const makeHeader = (filepath: string): string => {
  const user: string = process.env.USER || 'marvin';

  let newHeader: HeaderInfo = {
    filename: basename(filepath),
    user: user,
    mail: `${user}<@student.42.fr>`,
    createdDate: moment(),
    updatedDate: moment(),
    createdBy: user,
    updatedBy: user,
  };

  console.log(newHeader);
  return '';

  
};

makeHeader('/Users/a18573961/Desktop/code/my/42HeaderGenerator/tmp.c');
