# 42HeaderGenerator
> What is it?  
Generator of headers for
[21](https://21-school.ru/)/[42](https://www.42.fr/en/) code projects.

> How does it looks?  
Example of header in `main.c`
```
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sleonia <sleonia@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/16 09:55:42 by sleonia           #+#    #+#             */
/*   Updated: 2020/09/29 13:47:17 by sleonia          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
```
Example of `author`
```
sleonia
dgreat
ahiroko
```

> How to using?  
```
# create author file
$> ts-node src/  author %YOUR FOLDER OR FILE%
```
> How to install?
```
$> git clone https://github.com/sleonia/42HeaderGenerator
$> cd 42HeaderGenerator
$> npm i
```
> Example of working
```
$> ts-node src/  ./examples/author ./examples/main.c
```

> Why i create this project?  
1) I want to learning and training `typescript`
2) I need this tool in 42/21 school

> Stack of technology
```TypeScript, Node.js```
