from django.contrib import admin
from django.urls import path
from alunos.views import DetailUpdateDeleteAlunos, ListCreateAlunos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alunos/', ListCreateAlunos.as_view()),
    path('alunos/<int:pk>', DetailUpdateDeleteAlunos.as_view()),
]

