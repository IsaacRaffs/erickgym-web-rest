from rest_framework.serializers import ModelSerializer
from .models import Alunos

class AlunoSerializer(ModelSerializer):
    class Meta:
        model = Alunos
        fields = [ 'id','nome', 'sexo', 'dt_nasc', 'dt_nasc', 'telefone', 'cpf']