from rest_framework import generics
from django.shortcuts import render
from .serializers import *
from .models import *


class ScheduleAPIView(generics.ListAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
