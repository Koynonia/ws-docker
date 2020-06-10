CREATE DATABASE teste

USE teste

CREATE TABLE Funcionarios
(
    Id Int identity(1,1),
    Nome Nvarchar(50) Not NUll,
    Sobrenome Nvarchar(50) Not Null,
    Salario Int Not Null,
    Sexo char Not Null,
    Cidade Nvarchar(50) Not Null
)


SELECT * FROM Funcionarios

INSERT INTO Funcionarios VALUES ('Fernando','M. Oliveira',5000,'M','São Paulo')