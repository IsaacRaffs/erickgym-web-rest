from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Alunos
from .serializers import AlunoSerializer
from rest_framework import status
from django.http import Http404

class ListarAlunosView(APIView):
    def get(self, request, pk=0):
        alunos = Alunos.objects.all()
        serializer = AlunoSerializer(alunos, many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
    
    def get_object(self, pk):
        try:
            return Alunos.objects.get(pk=pk)
        except Alunos.DoesNotExist:
            return Http404
        
    def put(self, request, pk):
        alvo = self.get_object(pk)
        serializer = AlunoSerializer(alvo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
       alvo = self.get_object(pk)
       alvo.delete()
       return Response(status=status.HTTP_204_NO_CONTENT)

class ModificarAlunos(APIView):

    def get(self, request, pk):
        alunos = Alunos.objects.all()
        serializer = AlunoSerializer(alunos, many=True)
        return Response(serializer.data, status=200)

    def get_object(self, pk):
        try:
            return Alunos.objects.get(pk=pk)
        except Alunos.DoesNotExist:
            return Http404

    def put(self, request, pk):
        alvo = self.get_object(pk)
        serializer = AlunoSerializer(alvo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)