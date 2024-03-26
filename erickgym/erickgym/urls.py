from django.contrib import admin
from django.urls import path
from alunos.views import ListarAlunosView, ModificarAlunos
urlpatterns = [
    path('admin/', admin.site.urls),
    path('alunos/', ListarAlunosView.as_view()),
    path('alunos/obter/<int:pk>', ListarAlunosView.as_view()),
    path('alunos/modificar/<int:pk>', ModificarAlunos.as_view()),
    path('alunos/deletar/<int:pk>', ModificarAlunos.as_view()),
]
