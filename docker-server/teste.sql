IF DB_ID('teste') IS NULL
CREATE DATABASE teste
GO

USE teste

if OBJECT_ID('Funcionarios') IS NULL
CREATE TABLE Funcionarios
(
    Id Int identity(1,1),
    Nome Nvarchar(50) Not NUll,
    Sobrenome Nvarchar(50) Not Null,
    Salario Int Not Null,
    Sexo char Not Null,
    Cidade Nvarchar(50) Not Null
)

if (SELECT COUNT(1) FROM Funcionarios) = 0
INSERT INTO Funcionarios VALUES ('Fernando','M. Oliveira',5000,'M','São Paulo')

SELECT * FROM Funcionarios
