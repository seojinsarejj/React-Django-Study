from django.shortcuts import render
from rest_framework import generics
from .models import Memo
from .serializers import MemoSerializer
# Create your views here.


class ListMemo(generics.ListCreateAPIView):
    queryset = Memo.objects.all()
    serializer_class = MemoSerializer

class DetailMemo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Memo.objects.all()
    serializer_class = MemoSerializer
