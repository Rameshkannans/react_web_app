from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, NoteSerializer, UserDetailsSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Note, UserDetails

class CreateUserView(generics.CreateAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        permission_classes = [AllowAny]


# class UserInfoView(APIView):
#     permission_classes = [AllowAny]

#     def get(self, request):
#         return Response({"username": request.user.username})

class UserInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        user = request.user
        if not user.is_authenticated:
            return Response({"error": "User is not authenticated"}, status=401)
        
        serializer = UserSerializer(user)
        return Response(serializer.data)
    

class UserDetailsInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            user_details = UserDetails.objects.get(author=request.user)
            serializer = UserDetailsSerializer(user_details, context={"request": request})
            return Response(serializer.data)
        except UserDetails.DoesNotExist:
            return Response({"error": "User details not found"}, status=404)
    


class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]
    

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
        # OR
#     def get_queryset(self):
#         user_id = self.request.user.id  
#         return Note.objects.filter(author=user_id)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
              serializer.save(author = self.request.user)
        else:
             print(serializer.errors)



class NoteUpdate(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class NoteDelete(generics.DestroyAPIView):
     queryset = Note.objects.all()
     serializer_class = NoteSerializer
     permission_classes = [IsAuthenticated]

     def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)