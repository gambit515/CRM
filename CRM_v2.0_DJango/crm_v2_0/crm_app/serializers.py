from rest_framework import serializers
from .models import Record


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('Date', 'TimeStart', 'TimeFinish', 'Guest', 'Master', 'Type')
