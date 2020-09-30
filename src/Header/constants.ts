export interface HeaderContent {
  filename: string;
  user: string;
  mail: string;
  createdDate: string;
  updatedDate: string;
  createdBy: string;
  updatedBy: string;
}

export const headerTemplate: string = `
\/* ************************************************************************** *\/
\/*                                                                            *\/
\/*                                                        :::      ::::::::   *\/
\/*   $FILENAME__________________________________        :+:      :+:    :+:   *\/
\/*                                                    +:+ +:+         +:+     *\/
\/*   By: $AUTHOR________________________________    +#+  +:+       +#+        *\/
\/*                                                +#+#+#+#+#+   +#+           *\/
\/*   Created: $CREATEDATE________ by $CREATEDBY_       #+#    #+#             *\/
\/*   Updated: $UPDATEDATE________ by $UPDATEDBY_      ###   ########.fr       *\/
\/*                                                                            *\/
\/* ************************************************************************** *\/
`.substring(1);

export const maxLength: number = 44;
