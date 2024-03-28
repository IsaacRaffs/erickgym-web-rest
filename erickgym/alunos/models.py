from django.db import models

class Alunos(models.Model):

    nome = models.CharField(max_length=80)
    sexo = models.CharField(max_length=20, default="Masculino")
    dt_nasc = models.CharField(max_length=80)
    telefone = models.PositiveIntegerField()
    cpf = models.PositiveIntegerField()

    def __str__(self):
        return self.nome