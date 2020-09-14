# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def JstDef3(request):
    return TemplateResponse(request, 'less3/html3.html')

def JsDefDz3(request):
    return TemplateResponse(request, 'less3/htmldz3.html')
