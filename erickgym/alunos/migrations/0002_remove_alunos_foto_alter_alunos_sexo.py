# Generated by Django 5.0 on 2024-03-26 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alunos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alunos',
            name='foto',
        ),
        migrations.AlterField(
            model_name='alunos',
            name='sexo',
            field=models.BooleanField(),
        ),
    ]
