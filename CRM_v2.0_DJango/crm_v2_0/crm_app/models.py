from django.db import models
from django.contrib.auth.models import User

class Record(models.Model):
    Date = models.DateField(null=False)
    TimeStart = models.TimeField(null=False)
    TimeFinish = models.TimeField(null=False)
    Guest = models.ForeignKey(User,on_delete=models.CASCADE, related_name='guest',null=False)
    Master = models.ForeignKey(User,on_delete=models.CASCADE, related_name='master',null=False)
    Procedure = models.ForeignKey("Procedure",on_delete=models.CASCADE,null=False)


class Procedure(models.Model):
    Name = models.CharField(max_length=50,null=False)
    Cost = models.FloatField(max_length=10,null=False)
    Note = models.TextField(max_length=300,null=False)
    Materials = models.TextField(max_length=300,null=False)
