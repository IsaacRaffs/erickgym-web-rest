from django.db import models

class Alunos(models.Model):
    SEXO_CHOICES = (
        ('Masculino', 'Masculino'),
        ('Feminino', 'Feminino'),
    )
    nome = models.CharField(max_length=80)
    foto = models.ImageField(null=True, blank=True)
    sexo = models.CharField(choices=SEXO_CHOICES, max_length=80)
    dt_nasc = models.CharField(max_length=80)
    telefone = models.PositiveIntegerField()
    cpf = models.PositiveIntegerField()

    def __str__(self):
        return self.nome